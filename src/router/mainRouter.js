import AddTotal from "../Component/AddQuantity";
import AddForm from "../Component/AddRate";
import GoldRate from "../Component/AllGoldRate";
import SilverRate from "../Component/AllSilver";
import Dashboard from "../Component/Dashboard";
import Edit from "../Component/EditGold";
import EditSilver from "../Component/EditSilver";

import MainLayout from "../Component/MainLayout";
import Transaction from "../Component/Transaction";
import User from "../Component/User";

const mainRouter = {
    path: 'dashboard',
    Component: MainLayout,
    children: [
        { path: '', Component: Dashboard },
        { path: 'add', Component: AddForm },
        { path: 'Total', Component: AddTotal },
        // { path: 'profile', Component:Profile },
        { path: 'User', Component: User },
        { path: 'user/:phoneNo', Component: Transaction },
        { path: 'silverrate', Component: SilverRate },
        { path: 'goldrate', Component: GoldRate },
        { path: 'edit', Component: Edit },
        { path: 'editsilver', Component: EditSilver },


    ],
};

export default mainRouter