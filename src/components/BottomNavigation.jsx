import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Badge } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function BottomNav({ onCategoriesClick, cartCount = 0 }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (newValue) => {
    setValue(newValue);
    
    switch(newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        // Search functionality
        break;
      case 2:
        // Account functionality
        break;
      case 3:
        onCategoriesClick();
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderTop: "1px solid #e0e0e0",
        backgroundColor: "white",
        "& .MuiBottomNavigationAction-root": {
          color: "#999",
          "&.Mui-selected": {
            color: "#06b6d4"
          }
        }
      }}
    >
      <BottomNavigationAction 
        label="Store" 
        icon={<StorefrontIcon />}
      />
      <BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon />}
      />
      <BottomNavigationAction 
        label="Account" 
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction 
        label="Categories" 
        icon={<MenuIcon />}
      />
    </BottomNavigation>
  );
}
