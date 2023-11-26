import { Header } from "~/components/layout/layoutComponents"
function HeaderOnly( {children} ) {
    return (
        <div className="container">
            <Header></Header>
            <div className="content">
                {children}
            </div>
        </div>
    )
}
export default HeaderOnly