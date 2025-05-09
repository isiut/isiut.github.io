const elementNames = [
  null,
  "Hydrogen",
  "Helium",
  "Lithium",
  "Beryllium",
  "Boron",
  "Carbon",
  "Nitrogen",
  "Oxygen",
  "Fluorine",
  "Neon",
  "Sodium",
  "Magnesium",
  "Aluminum",
  "Silicon",
  "Phosphorus",
  "Sulfur",
  "Chlorine",
  "Argon",
  "Potassium",
  "Calcium",
  "Scandium",
  "Titanium",
  "Vanadium",
  "Chromium",
  "Manganese",
  "Iron",
  "Cobalt",
  "Nickel",
  "Copper",
  "Zinc",
  "Gallium",
  "Germanium",
  "Arsenic",
  "Selenium",
  "Bromine",
  "Krypton",
  "Rubidium",
  "isotopeNameontium",
  "Yttrium",
  "Zirconium",
  "Niobium",
  "Molybdenum",
  "Technetium",
  "Ruthenium",
  "Rhodium",
  "Palladium",
  "Silver",
  "Cadmium",
  "Indium",
  "Tin",
  "Antimony",
  "Tellurium",
  "Iodine",
  "Xenon",
  "Cesium",
  "Barium",
  "Lanthanum",
  "Cerium",
  "Praseodymium",
  "Neodymium",
  "Promethium",
  "Samarium",
  "Europium",
  "Gadolinium",
  "Terbium",
  "Dysprosium",
  "Holmium",
  "Erbium",
  "Thulium",
  "Ytterbium",
  "Lutetium",
  "Hafnium",
  "Tantalum",
  "Tungsten",
  "Rhenium",
  "Osmium",
  "Iridium",
  "Platinum",
  "Gold",
  "Mercury",
  "Thallium",
  "Lead",
  "Bismuth",
  "Polonium",
  "Astatine",
  "Radon",
  "Francium",
  "Radium",
  "Actinium",
  "Thorium",
  "Protactinium",
  "Uranium",
  "Neptunium",
  "Plutonium",
  "Americium",
  "Curium",
  "Berkelium",
  "Californium",
  "Einsteinium",
  "Fermium",
  "Mendelevium",
  "Nobelium",
  "Lawrencium",
  "Rutherfordium",
  "Dubnium",
  "Seaborgium",
  "Bohrium",
  "Hassium",
  "Meitnerium",
  "Darmstadtium",
  "Roentgenium",
  "Copernicium",
  "Nihonium",
  "Flerovium",
  "Moscovium",
  "Livermorium",
  "Tennessine",
  "Oganesson",
];

const elementAbbr = [
  null,
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nh",
  "Fl",
  "Mc",
  "Lv",
  "Ts",
  "Og",
];

const decays = {
  "U-235": [1, 0, 0, 0],
  "Th-231": [0, 1, 0, 0],
  "Pa-231": [1, 0, 0, 0],
  "Ac-227": [0.9862, 0.0138, 0, 0],
  "Th-227": [1, 0, 0, 0],
  "Fr-223": [0, 1, 0, 0],
  "Ra-223": [1, 0, 0, 0],
  "Rn-219": [1, 0, 0, 0],
  "Po-215": [0.9999, 0.0001, 0, 0],
  "Pb-211": [0, 1, 0, 0],
  "At-215": [1, 0, 0, 0],
  "Bi-211": [0.9973, 0.0027, 0, 0],
  "Tl-207": [0, 1, 0, 0],
  "Po-211": [1, 0, 0, 0],
  "Co-60": [0, 1, 0, 0],
  "U-238": [1.0, 0, 0, 0],
  "Th-234": [0, 1.0, 0, 0],
  "Pa-234": [0, 1.0, 0, 0],
  "U-234": [1.0, 0, 0, 0],
  "Th-230": [1.0, 0, 0, 0],
  "Ra-226": [1.0, 0, 0, 0],
  "Rn-222": [1.0, 0, 0, 0],
  "Po-218": [0.9998, 0.0002, 0, 0],
  "At-218": [0.999, 0.001, 0, 0],
  "Rn-218": [1.0, 0, 0, 0],
  "Pb-214": [0, 1.0, 0, 0],
  "Bi-214": [0.00021, 0.99979, 0, 0],
  "Po-214": [1.0, 0, 0, 0],
  "Tl-210": [0, 1.0, 0, 0],
  "Pb-210": [0, 1.0, 0, 0],
  "Bi-210": [0, 1.0, 0, 0],
  "Po-210": [1.0, 0, 0, 0],
  "Hg-206": [0, 0.001, 0, 0],
  "Tl-206": [0, 1.0, 0, 0],
  "Pb-206": [0, 0, 0, 0],
  "Cs-137": [0, 1, 0, 0],
};

const nuclearNotation = document.getElementById("nuclearNotation");
const isotopeName = document.getElementById("main");
const nucleus = document.getElementById("nucleus");
const decayRatios = document.getElementById("decayRatios");
const decayMessage = document.getElementById("decayMessage");
const nucleusContainer = document.getElementsByClassName("nucleusContainer");

let a = 235;
let z = 92;

let isotopeNameText = "";
let nuclearNotationText = "";

updateScreen();

function createParticleAnimation(particleType, color, label) {
  const particle = document.createElement("div");
  particle.classList.add(`${particleType}-particle`);
  particle.style.position = "absolute";
  particle.style.width = "30px";
  particle.style.height = "30px";
  particle.style.borderRadius = "50%";
  particle.style.backgroundColor = color;
  particle.style.left = "50%";
  particle.style.top = "50%";
  particle.style.transform = "translate(-50%, -50%)";

  const particleLabel = document.createElement("div");
  particleLabel.textContent = label;
  particleLabel.style.position = "absolute";
  particleLabel.style.color = "white";
  particleLabel.style.fontSize = "16px";
  particleLabel.style.fontWeight = "bold";
  particleLabel.style.left = "50%";
  particleLabel.style.top = "50%";
  particleLabel.style.transform = "translate(-50%, -50%)";

  particle.appendChild(particleLabel);
  nucleus.appendChild(particle);

  const randomAngle = Math.random() * 2 * Math.PI;
  const distance = 5000;
  const xOffset = Math.cos(randomAngle) * distance;
  const yOffset = Math.sin(randomAngle) * distance;

  particle.animate(
    [
      { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
      {
        transform: `translate(${xOffset}%, ${yOffset}%) scale(0.5)`,
        opacity: 0,
      },
    ],
    {
      duration: 5000,
      fill: "forwards",
    }
  );

  setTimeout(() => {
    nucleus.removeChild(particle);
  }, 5000);
}

function alpha() {
  decayMessage.style.color = "red";
  const decayModeArr = decayModes();
  if (decayModeArr[0] == 0) {
    decayMessage.innerHTML = `This decay mode is not possible for ${isotopeNameText}`;
  } else {
    a = a - 4;
    z = z - 2;

    decayMessage.innerHTML =
      "α particle emitted: <br>- Protons: 2 <br>- Neutrons: 2";

    createParticleAnimation("alpha", "red", "α");
    updateScreen();
  }
}

function betaMinus() {
  decayMessage.style.color = "blue";
  const decayModeArr = decayModes();
  if (decayModeArr[1] == 0) {
    decayMessage.innerHTML = `This decay mode is not possible for ${isotopeNameText}`;
  } else {
    z = z + 1;

    decayMessage.innerHTML =
      "β⁻ particle emitted: <br>- Electrons: 1 <br>- Antineutrinos: 1";

    createParticleAnimation("beta-minus", "blue", "β⁻");
    updateScreen();
  }
}

function betaPlus() {
  decayMessage.style.color = "green";
  const decayModeArr = decayModes();
  if (decayModeArr[2] == 0) {
    decayMessage.innerHTML = `This decay mode is not possible for ${isotopeNameText}`;
  } else {
    z = z - 1;
    decayMessage.innerHTML =
      "β⁺ particle emitted: <br>- Positrons: 1 <br>- Neutrinos: 1";

    createParticleAnimation("beta-plus", "green", "β⁺");
    updateScreen();
  }
}

function decayModes() {
  if (!elementAbbr[z] || !decays[`${elementAbbr[z]}-${a}`]) {
    console.error(`Invalid decay key: ${elementAbbr[z]}-${a}`);
    return [0, 0, 0, 0];
  }

  const decayKey = `${elementAbbr[z]}-${a}`;
  const decayMode = decays[decayKey] || [0, 0, 0, 0];
  console.log(decayKey);
  console.log(decayMode);
  return decayMode;
}

function updateScreen() {
  isotopeNameText = elementNames[z] + "-" + a;
  isotopeName.textContent = isotopeNameText;

  nuclearNotationText = `<sub>${z}</sub><sup>${a}</sup>${elementAbbr[z]}`;
  nuclearNotation.innerHTML = nuclearNotationText;

  nucleus.style.height = `${a * 0.1}vh`;
  nucleus.style.width = `${a * 0.1}vh`;

  const decayModeArr = decayModes();

  const stable = decayModeArr.reduce((sum, mode) => sum + mode, 0) === 0;

  if (!stable) {
    Array.from(nucleusContainer).forEach((container) => {
      container.style.border = "5px solid yellow";
      container.style.borderRadius = "50%";

      container.style.animation = "shake 0.5s infinite";
      container.style.position = "relative";
      container.style.top = "0"; // Reset any unintended offsets
    });
  } else {
    Array.from(nucleusContainer).forEach((container) => {
      container.style.border = "5px solid black";
      container.style.animation = "";
    });
  }

  decayRatios.innerHTML = stable
    ? "Stable"
    : `Radioactive: 
  <br>α: ${(decayModeArr[0] * 100).toFixed(2)}% 
  <br>β⁻: ${(decayModeArr[1] * 100).toFixed(2)}% 
  <br>β⁺: ${(decayModeArr[2] * 100).toFixed(2)}% `;
}

function selectElementChange(event) {
  const selectedValue = event.target.value;
  switch (selectedValue) {
    case "Uranium-235":
      a = 235;
      z = 92;
      break;
    case "Uranium-238":
      a = 238;
      z = 92;
      break;
    case "Carbon-14":
      a = 14;
      z = 6;
      break;
    case "Radon-222":
      a = 222;
      z = 86;
      break;
    case "Iodine-131":
      a = 131;
      z = 53;
      break;
    case "Cesium-137":
      a = 137;
      z = 55;
      break;
    case "Plutonium-239":
      a = 239;
      z = 94;
      break;
    case "Thorium-232":
      a = 232;
      z = 90;
      break;
    case "Potassium-40":
      a = 40;
      z = 19;
      break;
    case "Cobalt-60":
      a = 60;
      z = 27;
      break;
    default:
      console.warn("Unknown isotope selected");
      return;
  }

  updateScreen();
}

const elementSelect = document.getElementById("commonIsotopes");
elementSelect.addEventListener("change", selectElementChange);
