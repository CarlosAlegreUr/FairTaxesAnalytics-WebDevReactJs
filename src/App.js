import { useState } from "react"

import FTATitle from "./components/FTATitle"
import BudgetChart from "./components/BudgetChart"
import FinancialAdvise from "./components/FinancialAdvise"
import StatParam from "./components/StatParamMenu"
import SocialMediaNav from "./components/SocialMediaNav"
import AdviseButton from "./components/AdviseButton"
import PageFooter from "./components/PageFooter"
import TaxationLevelsTable from "./components/TaxationLevelsTable"
import CountriesDataMenu from "./components/CountriesDataMenu"

export default function App() {
    const [taxLvlTablerows, setRows] = useState([])
    const [financialAd, setFinancialAd] = useState({
        advise: false,
        buttonText: "SHOW ADVISE",
    })
    const prev_budget = 0
    const new_budget = 0
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
                        <TaxationLevelsTable
                            rows={taxLvlTablerows}
                            setNewRow={setRows}
                            newBudget={new_budget}
                        />
                    </th>

                    <th className="col">
                        <BudgetChart taxLvlRows={taxLvlTablerows} />
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
                        <AdviseButton
                            financialAd={financialAd}
                            setFinancialAd={setFinancialAd}
                        />
                    </th>

                    {financialAd.advise ? (
                        <td className="col">
                            <FinancialAdvise />
                        </td>
                    ) : null}
                </tr>
            </table>
            <PageFooter />
        </div>
    )
}
