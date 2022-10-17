import FTATitle from "./components/FTATitle"
import Chart from "./components/Chart"
import FinancialAdvise from "./components/FinancialAdvise"
import StatParam from "./components/StatParamMenu"
import SocialMediaNav from "./components/SocialMediaNav"
import PageFooter from "./components/PageFooter"
import AnalyzeButton from "./components/AnalyzeButton"
import TaxationLevelsTable from "./components/TaxationLevelsTable"
import CountriesDataMenu from "./components/CountriesDataMenu"

export default function App() {
    return (
        <div className="bg-dark bg-gradient text-white" id="app-main">
            <header className="container-md" id="page-top">
                <SocialMediaNav />
                <FTATitle />
            </header>
            <table className="container-md border" id="middle-div">
                <tr className="row align-items-center">
                    <th className="col">
                        <CountriesDataMenu />
                        <br />
                        <br />
                        <TaxationLevelsTable />
                    </th>

                    <th className="col">
                        <Chart />
                        <br />
                        <br />
                        <StatParam />
                    </th>
                </tr>
            </table>
            <br /> <br />
            <table className="container-md border" id="bottom-div">
                <tr className="row">
                    <th className="col">
                        <AnalyzeButton />
                    </th>

                    <td className="col">
                        <FinancialAdvise />
                    </td>
                </tr>
            </table>
            <PageFooter />
        </div>
    )
}
