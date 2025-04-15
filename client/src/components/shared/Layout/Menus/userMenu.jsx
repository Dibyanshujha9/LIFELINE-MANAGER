import { FaWarehouse, FaHandHoldingMedical, FaHospital, FaBuilding } from "react-icons/fa"; // import icons

export const userMenu = [
  {
    name: "Inventory",
    path: "/",
    icon: <FaWarehouse />,
  },
  {
    name: "Donar",
    path: "/donar",
    icon: <FaHandHoldingMedical />,
  },
  {
    name: "Hospital",
    path: "/hospital",
    icon: <FaHospital />,
  },
  {
    name: "Organisation",
    path: "/orgnaisation",
    icon: <FaBuilding />,
  },
];
