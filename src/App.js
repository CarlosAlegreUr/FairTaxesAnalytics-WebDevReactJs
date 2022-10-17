import "bootstrap/dist/css/bootstrap.min.css"

import FTATitle from "./components/FTATitle"
import Chart from "./components/Chart"
import FinancialAdvise from "./components/FinancialAdvise"
import StatParam from "./components/StatParamMenu"
import SocialMediaNav from "./components/SocialMediaNav"
import PageFooter from "./components/PageFooter"
import AnalyzeButton from "./components/AnalyzeButton"
import TaxationLevelsTable from "./components/TaxationLevelsTable"
import AddTaxationLvlForm from "./components/AddTaxationLevelForm"
import CountriesDataMenu from "./components/CountriesDataMenu"

export default function App() {
    return (
        <div class="bg-dark bg-gradient text-white" id="app-main">
            <header class="container-md" id="page-top">
                <SocialMediaNav />
                <FTATitle />
            </header>
            <table class="container-md border" id="middle-div">
                <tr class="row align-items-center">
                    <th class="col">
                        <CountriesDataMenu />
                        <br />
                        <br />
                        <TaxationLevelsTable />
                        <br />
                        <br />
                        <AddTaxationLvlForm />
                    </th>

                    <th class="col">
                        <Chart />
                        <br />
                        <br />
                        <StatParam />
                    </th>
                </tr>
            </table>
            <br /> <br />
            <table class="container-md border" id="bottom-div">
                <tr class="row">
                    <th class="col">
                        <AnalyzeButton />
                    </th>

                    <td class="col">
                        <FinancialAdvise />
                    </td>
                </tr>
            </table>
            <PageFooter />
        </div>
    )
}
