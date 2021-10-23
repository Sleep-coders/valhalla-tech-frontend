import React from "react";
import DropdownMenu from "react-bootstrap/DropdownMenu";

class StoreCategoryFilter extends React.Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    };

    getMenuItem = (menuItem, depthLevel, index) => {
        let title = this.getMenuItemTitle(menuItem, index, depthLevel);

        if (menuItem.submenu && menuItem.submenu.length > 0) {
            return (
                <li>
                    {title}
                    <DropdownMenu config={menuItem.submenu} submenu={true}/>
                </li>
            );
        } else {
            return <li>{title}</li>;
        }
    };

    render = () => {
        let {config} = this.props;

        let options = [];
        config.map((item, index) => {
            options.push(this.getMenuItem(item, 0, index));
        });

        if (this.props.submenu && this.props.submenu === true)
            return <ul>{options}</ul>;

        return <ul className="dropdown-menu">{options}</ul>;
    };
}
export default StoreCategoryFilter;

{/*<div className="dropdown">*/
}
{/*    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"*/
}
{/*       data-bs-toggle="dropdown" aria-expanded="false">*/
}
{/*        Products*/
}
{/*    </a>*/
}

{/*    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">*/
}
{/*        <li>*/
}
{/*            <a className="dropdown-toggle" href="#"*/
}
{/*               id="dropdownMenuLink2"*/
}
{/*               data-bs-toggle="dropdown" aria-expanded="false">*/
}
{/*                Home Appliances*/
}
{/*            </a>*/
}
{/*            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">*/
}
{/*                <li><a className="dropdown-item" href="#">Refrigerators</a></li>*/
}
{/*                <li><a className="dropdown-item" href="#">Wash Machines</a></li>*/
}
{/*                <li><a className="dropdown-item" href="#">Dish Washers</a></li>*/
}
{/*                <li><a className="dropdown-item" href="#">Vacuums</a></li>*/
}
{/*            </ul>*/
}
{/*        </li>*/
}
{/*        <li>*/
}
{/*            <a className="dropdown-toggle" href="#"*/
}
{/*               id="dropdownMenuLink3"*/
}
{/*               data-bs-toggle="dropdown" aria-expanded="false">*/
}
{/*                Entertainments*/
}
{/*            </a>*/
}
{/*            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink3">*/
}
{/*                <li><a className="dropdown-item" href="#">TV's</a></li>*/
}
{/*                <li><a className="dropdown-item" href="#">Gaming Console</a></li>*/
}
{/*                <li><a className="dropdown-item" href="#">Home Theater</a></li>*/
}
{/*            </ul>*/
}
{/*        </li>*/
}
{/*        <li>*/
}
{/*            <a className="dropdown-toggle" href="#"*/
}
{/*               id="dropdownMenuLink4"*/
}
{/*               data-bs-toggle="dropdown" aria-expanded="false">*/
}
{/*                Computers*/
}
{/*            </a>*/
}
{/*            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">*/
}
{/*                <li><a className="dropdown-item" href="#">Desktop</a></li>*/
}
{/*                <li><a className="dropdown-item" href="#">Laptop</a></li>*/
}
{/*            </ul>*/
}
{/*        </li>*/
}
{/*        <li><a className="dropdown-item" href="#">Smart Phones</a></li>*/
}
{/*    </ul>*/
}
{/*</div>*/
}

// getRefrigerators = event => {
//
// };
//
//
// getWashingMachines = event => {
//
// };
//
//
// getDishWashers = event => {
//
// };
//
//
// getVacuums = event => {
//
// };
//
//
// getTVs = event => {
//
// };
//
//
// getGamingConsoles = event => {
//
// };
//
// getHomeTheaters = event => {
// };
//
//
// getDesktops = event => {
// };
//
// getLaptops = event => {
// };
//
// getSmartPhones = event => {
// };




