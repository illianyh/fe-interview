import React, { useEffect, useState, useContext } from "react";
import { Grid, Tabs, Tab, makeStyles, Button, Paper } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ReceiptIcon from "@material-ui/icons/Receipt";
import PaymentIcon from "@material-ui/icons/Payment";

import BillItem from "./BillItem";
import { Bill } from "../models/api-model";
import { COLORS } from "../shared/colors";
import { PAGE_LIMIT } from "../shared/constants";
import { TabContext } from "../shared/context/Context";
import { getBills, updateBill, getCategories } from "../api/api";
import { updatePage } from "../util/updatePage";
import { getCat } from "../util/getCategory";

const useStyles = makeStyles({
  container: {
    minHeight: "30rem",
    marginTop: "5rem",
  },
  root: {
    flexGrow: 1,
    minWidth: 650,
    marginTop: 10,
  },
  tab: {
    minWidth: 600,
  },
  tabHeader: {
    color: COLORS.primary,
  },
  buttonsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  navButtons: {
    color: COLORS.secondary,
    background: COLORS.primary,
    "&:hover": {
      background: COLORS.primaryDark,
    },
  },
});

const BillList: React.FC = () => {
  const classes = useStyles();

  // getting global tab context using a hook
  const tabContext = useContext(TabContext);

  // setting state
  const [bills, setBills] = useState<any>();
  const [isBill, setIsBill] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [categories, setCategories] = useState<any>([]);

  // I've added this as state so that you can extend the app with
  // functionality to change the anount of posts listed per page
  const [limit, setLimit] = useState<number>(PAGE_LIMIT);

  // fetching categories from api and setting them in component state
  const getAllCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  // fetching bills from api and setting them in component state
  const getAllBills = async () => {
    const data = await getBills({ isBill, page, limit });
    setBills(data);
  };

  // updating bills through api and rerending updated db state
  const updateAllBills = async (id) => {
    await updateBill({ bills, id });
    getAllBills();
  };

  // handler to change tabs, update the filtering on the bills from isBill key
  // and making sure that the page number is reset
  const handleTabChange = (event: any, newValue: number) => {
    tabContext.updateTab(newValue);
    setPage(1);
    setIsBill(newValue === 0);
  };

  // handler for chaning page: implementation at ../util/updatePage
  const handlePageUpdate = (type: string) => {
    updatePage({ type, bills, limit, page }, setPage);
  };

  // handler for getting bill category for display: implimentation at ../util/getCategory
  const handleCategory = (categoryId) => {
    return getCat({ categories, categoryId });
  };

  // getting all categories on page render
  useEffect(() => {
    getAllCategories();
  }, []);

  // getting bills each time it's dependacies change and rerendering to the screen
  useEffect(() => {
    getAllBills();
  }, [isBill, page, limit]);

  // navigation buttons at bottom of table
  const NavButtons = [
    {
      type: "prev",
      icon: <NavigateBeforeIcon data-testid="prev-page" fontSize="large" />,
      disabled: page === 1,
    },
    {
      type: "next",
      icon: <NavigateNextIcon data-testid="next-page" fontSize="large" />,
      disabled: bills ? bills.length < limit : false,
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      className={classes.container}
    >
      <Grid item>
        <Paper className={classes.root} elevation={0}>
          <Tabs
            value={tabContext.tab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            aria-label="icon labele"
            className={classes.tabHeader}
          >
            <Tab
              data-testid="tab-icon-payment"
              icon={<PaymentIcon fontSize="large" />}
              disableRipple
            />
            <Tab
              data-testid="tab-icon-receipt"
              icon={<ReceiptIcon fontSize="large" />}
              disableRipple
            />
          </Tabs>

          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.root}
            spacing={2}
          >
            {bills &&
              bills.map((bill: Bill) => (
                <Grid item key={bill.id} className={classes.tab}>
                  <BillItem
                    bill={bill}
                    update={updateAllBills}
                    category={handleCategory(bill.categoryId)}
                  />
                </Grid>
              ))}
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.buttonsContainer}
              spacing={2}
            >
              {NavButtons.map((action) => (
                <Grid item key={action.type}>
                  <Button
                    variant="contained"
                    className={classes.navButtons}
                    onClick={() => handlePageUpdate(action.type)}
                    disabled={action.disabled}
                    disableRipple
                  >
                    {action.icon}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BillList;
