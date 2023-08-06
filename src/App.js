import { useState, useRef, useEffect } from "react"

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
    const [taxLvlTableRows, setRows] = useState([])

    const [financialAd, setFinancialAd] = useState({
        advise: false,
        buttonText: "SHOW ADVISE",
    })
    const [budget, setBudget] = useState(0)
    const [yearsToShow, setYearsToShow] = useState(10)

    useEffect(() => {
        console.log("Main page rendered")
    })

    return (
        <div className="bg-dark bg-gradient text-white" id="app-main">
            <header className="container-md" id="page-top">
                <SocialMediaNav />
                <FTATitle />
            </header>
            <table className="container-md border" id="middle-div">
                <tr className="row align-items-center">
                    <th className="col">
                        <CountriesDataMenu
                            setTaxLvlTableRows={setRows}
                            setBudget={setBudget}
                        />
                        <br />
                        <br />
                        <TaxationLevelsTable
                            rows={taxLvlTableRows}
                            setNewRow={setRows}
                            budget={budget}
                        />
                    </th>

                    <th className="col">
                        <BudgetChart
                            taxLvlRows={taxLvlTableRows}
                            initialBudget={budget}
                            yearsToShow={yearsToShow}
                        /> 
                        <br />
                        <br />
                        <StatParam
                            setBudget={setBudget}
                            setYearsToShow={setYearsToShow}
                        />
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
                    <td className="col">
                        {financialAd.advise && <FinancialAdvise />}
                    </td>
                </tr>
            </table>
            <PageFooter />
        </div>
    )
}
