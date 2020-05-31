import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Button,
  Avatar,
} from "@material-ui/core";
import BusinessIcon from "@material-ui/icons/Business";

import { Bill } from "../models/api-model";
import Transaction from "./Transaction";
import { COLORS } from "../shared/colors";

const useStyles = makeStyles({
  text: {
    fontFamily: "Work Sans, sans-serif",
  },
  header: {
    fontWeight: "bold",
    color: COLORS.primary,
  },
  transactions: {
    fontWeight: "bold",
    color: COLORS.black,
  },
  buttonRemove: {
    background: COLORS.primary,
    "&:hover": {
      background: COLORS.primaryDark,
    },
  },
  buttonAdd: {
    background: COLORS.primary,
  },
  buttonText: {
    textDecoration: "none",
    fontWeight: "bold",
    color: COLORS.secondary,
  },
  circle: {
    height: 30,
    width: 30,
    backgroundColor: COLORS.primary,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

// receiving props from ./BillList
interface BillItemProps {
  bill: Bill;
  update: (id: string) => void;
  category: {
    iconUrl: string;
    id: number;
    name: string;
  };
}

const BillItem: React.FC<BillItemProps> = ({ bill, update, category }) => {
  const classes = useStyles();
  const { name, id, isBill, transactions, iconUrl } = bill;

  // note that some iconUrl links are broken, therefore a default icon will
  // display if this is the case

  return (
    <ExpansionPanel elevation={4}>
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography
              variant="h4"
              className={[classes.header, classes.text].join(" ")}
              data-testid="name"
            >
              {name}
            </Typography>
            <Grid
              item
              container
              direction="row"
              alignItems="flex-start"
              justify="flex-start"
              spacing={2}
            >
              <Grid item>
                <Avatar className={classes.circle}>
                  <Typography
                    className={[classes.buttonText, classes.text].join(" ")}
                    data-testid="transactions"
                  >
                    {transactions.length}
                  </Typography>
                </Avatar>
              </Grid>

              <Grid item>
                <img
                  data-testid="image"
                  className={classes.icon}
                  src={category.iconUrl}
                  alt=""
                />
              </Grid>
              <Grid item>
                <Avatar className={classes.circle} src={iconUrl} alt="">
                  <BusinessIcon />
                </Avatar>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => update(id)}
              className={classes.buttonRemove}
            >
              <Typography
                variant="h5"
                className={[classes.buttonText, classes.text].join(" ")}
              >
                {isBill ? "Remove" : "Add"}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={1}
        >
          {transactions.map((trans) => (
            <Grid item style={{ width: 600 }} key={trans.id}>
              <Transaction {...trans} />
            </Grid>
          ))}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default BillItem;
