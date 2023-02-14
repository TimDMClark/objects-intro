// Practice One
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};

console.log (`The height of the wardrobe is ${wardrobe.height} inches.`);
console.log (`The wardrobe manufacturer is ${wardrobe.manufacturer}.`);
console.log (`The contents in the wardrobe: ${wardrobe.contents}`);
console.log (`The depth of the wardrobe is ${wardrobe.depth} inches.`);
console.log (`The width of the wardrobe is ${wardrobe.width} inches.`);

wardrobe.material = "Cedar";

console.log(wardrobe);

// Practice Two
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

console.log (`In feet the Empire State Building is ${empireStateBuilding.height} high, ${empireStateBuilding.eastWestLength} east to west, ${empireStateBuilding.northSouthLength} north to south. It is also ${empireStateBuilding.stories} stories high and is a total of ${empireStateBuilding.squareFeet} square feet!`);

const empireStateBuildingAddress = empireStateBuilding.address;
const empireStateBuildingConstructionDate = empireStateBuilding.constructionDate;
const empireStateBuildingCost = empireStateBuilding.cost;
const empireStateBuildingOwner = empireStateBuilding.owner;
const empireStateBuildingArchitect = empireStateBuilding.architect;

console.log (empireStateBuildingAddress);
console.log(empireStateBuildingConstructionDate);
console.log(empireStateBuildingCost);
console.log(empireStateBuildingOwner);
console.log(empireStateBuildingArchitect);

// Practice Three
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
};

console.log('Part-Time Instructors: ' + nashvilleSoftwareSchool.instructors.partTime);
console.log('Full-Time Instructors: ' + nashvilleSoftwareSchool.instructors.fullTime);
console.log(nashvilleSoftwareSchool.instructors.fullTime[4] + ' and ' + nashvilleSoftwareSchool.instructors.partTime[0]);