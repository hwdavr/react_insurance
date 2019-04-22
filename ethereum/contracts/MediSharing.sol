pragma solidity ^0.4.17;

contract MediSharing {
    struct Client {
        string name;
        string nric;
        string birthday;
        string nationality;
        string addr;
        address clientId;
    }

    struct Claim {
        string nric;
        string description;
        uint amount;
        address patient;
    }
    
    Client[] public clients;
    Claim[] public claims;
    mapping(address => bool) private patients;
    uint private patientsCount;
    uint minDeposite;

    uint public totalClaimedAmount;

    constructor(uint deposite) public {
        minDeposite = deposite;
    }
    
    function joinPlan(string memory name, string memory nric, string memory birthday, string memory nationality, string memory addr) public payable {
        require(msg.value >= minDeposite);
        
        Client memory newClient = Client({
            name: name,
            nric: nric,
            birthday: birthday,
            nationality: nationality,
            addr: addr,
            clientId: msg.sender
        });

        clients.push(newClient);
    }

    function createClaim(string memory nric, string memory description, uint amount) public {
        Claim memory newClaim = Claim({
            nric: nric,
            description: description,
            amount: amount,
            patient: msg.sender
        });

        if (patients[msg.sender] == false) {
            patients[msg.sender] = true;
            patientsCount++;
        }

        totalClaimedAmount += amount;
        
        claims.push(newClaim);
    }

    function getClientCount() public view returns (uint) {
        return clients.length;
    }

    function getClaimCount() public view returns (uint) {
        return claims.length;
    }

    // modifier restricted() {
    //     require(msg.sender == manager);
    //     _;  //The other codes to be replace here
    // }

    function payout() public {
        // uint payerCnt = clients.length - patientsCount;
        // uint average = totalClaimedAmount / payerCnt;

        for (uint i=0; i < claims.length; i++) {
            // Claim storage claim = claims[i];
            // payout for each claim
            claims[i].patient.transfer(claims[i].amount);
        }
        // delete all claims, start a new period
        delete claims;
    }
    
}
