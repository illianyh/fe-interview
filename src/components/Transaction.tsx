import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";

import { COLORS } from "../shared/colors";

const useStyles = makeStyles({
  text: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  textColor: {
    color: COLORS.primary,
  },
  amount: {
    fontWeight: "bold",
  },
  dateContainer: {
    width: 100,
    height: 30,
    background: COLORS.primary,
    borderRadius: 5,
  },
  amountContainer: {
    minWidth: 200,
  },
});

// receiving props from ./BillItem
interface TransactionProps {
  date: string;
  amount: number;
}

const Transaction: React.FC<TransactionProps> = ({ date, amount }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="row" justify="space-between">
      <Grid item>
        <Grid
          item
          container
          direction="row"
          spacing={2}
          justify="flex-start"
          alignItems="center"
          className={classes.amountContainer}
        >
          <Grid item>
            <MonetizationOnOutlinedIcon className={classes.textColor} />
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              data-testid="amount"
              className={[classes.amount, classes.textColor, classes.text].join(
                " ",
              )}
            >
              $ {amount.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography
          data-testid="date"
          className={[classes.amount, classes.textColor, classes.text].join(
            " ",
          )}
        >
          {date}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Transaction;
