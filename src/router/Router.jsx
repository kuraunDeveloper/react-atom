import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Top } from "../components/pages/Top"
import { Users } from "../components/pages/Users"
import { DefalutLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefalutLayout>
                        <Top />
                    </DefalutLayout>
                </Route>
                <Route path="/users">
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}