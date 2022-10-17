export default function StatParamMenu() {
    return (
        <form id="stat-param">
            Total Budget <input type="number"></input> € <br />
            Interests <input type="checkbox"></input> <br />
            <p>
                {" "}
                If the interests of debt are included in the budget, mark the
                checkbox.
            </p>
        </form>
    )
}
