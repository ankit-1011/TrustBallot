// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TrustBallot {
    // ---------- Owner (Admin) ----------
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    // ---------- Election State ----------
    enum ElectionState { CREATED, ONGOING, ENDED }
    ElectionState public state = ElectionState.CREATED;

    // ---------- Candidate ----------
    struct Candidate {
        uint256 id;
        string name;
        string meta; // optional (party, ipfs hash, etc.)
        uint256 voteCount;
        bool exists;
    }
    // candidates stored in mapping + array for enumeration
    mapping(uint256 => Candidate) private candidates;
    uint256[] private candidateIds;
    uint256 private nextCandidateId = 1;

    // ---------- Voter ----------
    struct Voter {
        bool isRegistered;
        bool hasVoted;
        uint256 votedCandidateId; // 0 if not voted
    }
    mapping(address => Voter) public voters;

    // ---------- Events ----------
    event CandidateAdded(uint256 indexed candidateId, string name);
    event VoterRegistered(address indexed voter);
    event ElectionStarted();
    event ElectionEnded();
    event Voted(address indexed voter, uint256 indexed candidateId);

    // ---------- Admin functions ----------
    function addCandidate(string calldata _name, string calldata _meta) external onlyOwner {
        uint256 id = nextCandidateId++;
        candidates[id] = Candidate({
            id: id,
            name: _name,
            meta: _meta,
            voteCount: 0,
            exists: true
        });
        candidateIds.push(id);
        emit CandidateAdded(id, _name);
    }

    // register single voter
    function registerVoter(address _voter) external onlyOwner {
        require(_voter != address(0), "zero address");
        require(!voters[_voter].isRegistered, "already registered");
        voters[_voter] = Voter({ isRegistered: true, hasVoted: false, votedCandidateId: 0 });
        emit VoterRegistered(_voter);
    }

    // // batch register voters
    // function registerVotersBatch(address[] calldata _voters) external onlyOwner {
    //     for (uint256 i = 0; i < _voters.length; i++) {
    //         address v = _voters[i];
    //         if (v != address(0) && !voters[v].isRegistered) {
    //             voters[v] = Voter({ isRegistered: true, hasVoted: false, votedCandidateId: 0 });
    //             emit VoterRegistered(v);
    //         }
    //     }
    // }

    function startElection() external onlyOwner {
        require(state == ElectionState.CREATED, "Already started or ended");
        require(candidateIds.length >= 1, "No candidates");
        state = ElectionState.ONGOING;
        emit ElectionStarted();
    }

    function endElection() external onlyOwner {
        require(state == ElectionState.ONGOING, "Election not ongoing");
        state = ElectionState.ENDED;
        emit ElectionEnded();
    }

    // ---------- Voting ----------
    function vote(uint256 _candidateId , address _voter) external {
        require(state == ElectionState.ONGOING, "Voting not allowed");
        Voter storage sender = voters[_voter];
        require(sender.isRegistered, "Not a registered voter");
        require(!sender.hasVoted, "Already voted");

        Candidate storage cand = candidates[_candidateId];
        require(cand.exists, "Candidate not exists");

        // effect before interaction pattern (no external calls here though)
        cand.voteCount += 1;
        sender.hasVoted = true;
        sender.votedCandidateId = _candidateId;

        emit Voted(msg.sender, _candidateId);
    }

    // ---------- Views / Helpers ----------
    function getCandidate(uint256 _id) public view returns (uint256 id, string memory name, string memory meta, uint256 voteCount) {
        Candidate storage c = candidates[_id];
        require(c.exists, "Candidate not exists");
        return (c.id, c.name, c.meta, c.voteCount);
    }

    // function getAllCandidates() public view returns (Candidate[] memory) {
    //     Candidate[] memory list = new Candidate[](candidateIds.length);
    //     for (uint256 i = 0; i < candidateIds.length; i++) {
    //         list[i] = candidates[candidateIds[i]];
    //     }
    //     return list;
    // }

    function getCandidatesCount() public view returns (uint256) {
        return candidateIds.length;
    }

    function getWinner() public view returns (uint256 winnerId, string memory winnerName, uint256 winnerVotes) {
        require(state == ElectionState.ENDED, "Election not ended");
        uint256 topId = 0;
        uint256 topVotes = 0;
        for (uint256 i = 0; i < candidateIds.length; i++) {
            Candidate storage c = candidates[candidateIds[i]];
            if (c.voteCount > topVotes) {
                topVotes = c.voteCount;
                topId = c.id;
            }
        }
        if (topId == 0) {
            return (0, "", 0); // no votes cast
        }
        return (topId, candidates[topId].name, candidates[topId].voteCount);
    }

    function isVoterRegistered(address _addr) public view returns (bool) {
        return voters[_addr].isRegistered;
    }

    function hasVoted(address _addr) public view returns (bool) {
        return voters[_addr].hasVoted;
    }

    // ---------- Utility: transfer ownership ----------
    function transferOwnership(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "zero address");
        owner = _newOwner;
    }
}
