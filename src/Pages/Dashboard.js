function Dashboard() {
    async function GetAllItems() {
        let res = await fetch("localhost:3005/api/menu")
        res = res.json
        console.log(res);
    }
    GetAllItems()
    return (
        <h1>Welcome, user!</h1>
    )
}

export default Dashboard;