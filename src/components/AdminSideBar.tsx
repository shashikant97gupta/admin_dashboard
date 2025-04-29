import { IconType } from "react-icons"
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { Link, Location, useLocation } from "react-router-dom"

const AdminSideBar = () => {
    const location = useLocation();
  return (
    <aside>
        <h2>Logo.</h2>
        <DivOne location={location} />

        <DivTwo location={location} />

        <DivThree location={location} />
    </aside>
  )
}

const DivOne = ({ location} : { location : Location}) => {
    return (<div>
        <h5>
            Dashboard
        </h5>
        <ul>
            <Li
             text="Dashboard"
             url="/admin/dashboard"
             Icon={RiDashboardFill}
             location={location} />

             <Li
             text="Product"
             url="/admin/products"
             Icon={RiShoppingBag3Fill}
             location={location} />

             <Li
             text="Customer"
             url="/admin/customers"
             Icon={IoIosPeople}
             location={location} />

            <Li
                text="Transaction"
                url="/admin/transactions"
                Icon={AiFillFileText}
                location={location} />

        </ul>
    </div>)
}

const DivTwo = ({ location} : { location : Location}) => {
    return (<div>
        <h5>
            Charts
        </h5>
        <ul>
            <Li
             text="Bar"
             url="/admin/chart/bar"
             Icon={FaChartBar}
             location={location} />

            <Li
                text="Pie"
                url="/admin/chart/pie"
                Icon={FaChartPie}
                location={location} />

            <Li
                text="Line"
                url="/admin/chart/line"
                Icon={FaChartLine}
                location={location} />

        </ul>
    </div>)
}

const DivThree = ({ location} : { location : Location}) => {
    return (<div>
            <h5>
                Apps
            </h5>
            <ul>
                <Li
                 text="Stopwatch"
                 url="/admin/app/stopwatch"
                 Icon={FaStopwatch}
                 location={location} />

                 <Li
                 text="Coupon"
                 url="/admin/app/coupon"
                 Icon={RiCoupon3Fill}
                 location={location} />

                 <Li
                 text="Toss"
                 url="/admin/app/toss"
                 Icon={FaGamepad}
                 location={location} />

            </ul>
        </div>)
}

interface LiProps {
    url: string,
    text: string,
    location: Location,
    Icon: IconType
}

const Li = ({url, text, location, Icon} : LiProps) => {
    return (<li
        style={{
            backgroundColor: location.pathname.includes(url) ?
                "rgba(0,115,255, 0.1)" : "white",
        }}
    >
        <Link
            to={url}
            style={{
                color: location.pathname.includes(url) ?
                    "rgba(0,115,255, 0.1)" : "black",
            }}
        >
            <Icon />
            {text}
        </Link>

    </li>)
}

export default AdminSideBar