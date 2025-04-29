import { BsSearch } from "react-icons/bs"
import AdminSideBar from "../components/AdminSideBar"
import { FaRegBell } from "react-icons/fa";
import userImg from "../assets/userpic.png";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json"
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="adminContainer">
      {/* Sidebar */}
      <AdminSideBar />
      {/* Dashboard */}
      <main className="dashboard">
        <section className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </section>

        <section className="widgetContainer">
          <WidgetContainer 
          percent={40}
          amount={true}
          value={34000}
          heading="Revenue"
          color="rgb(0, 115, 255)"
          />

          <WidgetContainer
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />

          <WidgetContainer
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />

          <WidgetContainer
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76, 0, 255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            <BarChart 
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((item) => 
                <CategoryItem
                key={item.heading}
                value={item.value} 
                heading={item.heading} 
                color={`hsl(${item.value*4}, 70%, 50%)`} />
              )}
            </div>
          </div>
        </section>

        <section className="transaction-cintainer">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* Doughnut Chart */}
            <DoughnutChart 
            labels={["Male","Female"]}
            data={[12,19]}
            backgroundColor={[ "hsl(340, 42%, 56%)","rgba(53, 162, 235, 0.8)"]}
            cutout={'80%'}
            />

            <p>{<BiMaleFemale />}</p>
          </div>

          <DashboardTable data={data.transaction} />
        </section>

      </main>
    </div>
  )
}

const getGradient = (color: string, percent: number) =>
  `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg, rgb(255, 255, 255) 0)`;

interface WidgetProps {
  heading: string,
  value: number,
  percent: number,
  color: string,
  amount?: boolean
}
const WidgetContainer = ({heading, value, percent, color, amount=false} : WidgetProps) => <article className="widget">
  <div className="widgetInfo">
    <p>{heading}</p>
    <h4>{amount ? `$${value}` : value}</h4>
    {
      percent > 0 ?
      <span className="green">
        <HiTrendingUp /> +{percent}% {" "}
      </span>
      :
      <span className="red">
        <HiTrendingDown /> {percent}% {" "}
      </span>

    }
  </div>

  <div className="widgetCircle"
  style={{
    background: getGradient(color, percent),
  }}>
    <span style={{color}} >
      {percent}%
    </span>
  </div>
</article>


interface CategoryItemProps{
  color: string,
  value: number,
  heading: string,
}

const CategoryItem = ({color, heading, value} : CategoryItemProps) => {
 return (<div className="categoryItem">
          <h5>{heading}</h5>
          <div>
            <div style={{backgroundColor: color,
              width: `${value}%`
            }}>

            </div>
          </div>
          <span>{value}%</span>
  </div>)

}

export default Dashboard