export default function StatParamMenu() {
    return (
        <form id="stat-param">
            Previous Budget <input type="number"></input> € <br />
            New Budget <input type="number"></input> €
            <p>
                {" "}
                If Real% in the income levels' table is green, it means the
                change in budget will affect as you expect to that income level
                without carrying more debt.
            </p>{" "}
            <br /> <br />
            <p> Budget analysis data: </p>
            Years{" "}
            <input
                type="number"
                placeholder="recommended [0-15] years"
            ></input>{" "}
            <br /> <br />
            Interests <input type="checkbox"></input> <br />
            <p>
                {" "}
                If the interests of debt are included in the budget, mark the
                checkbox.
            </p>{" "}
            <br />
            <br />
        </form>
    )
}
