export default function AdviseButton(props) {
    return (
        <button
            onClick={() => {
                props.setFinancialAd({
                    advise: !props.financialAd.advise,
                    buttonText: props.financialAd.advise
                        ? "SHOW ADVISE"
                        : "HIDE ADVISE",
                })
            }}
            className="btn btn-danger"
            id="advise-button"
        >
            {props.financialAd.buttonText}
        </button>
    )
}
