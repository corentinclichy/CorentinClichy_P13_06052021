import React from "react";

// Style
import styled from "styled-components";

/**
 * @name AccountTransaction
 * @description Render the account card with amount name and description of the account
 * @param {object} accountName - The name of the account (find the data in data.js file)
 * @param {object} accountAmount - The amount of the account (find the data in data.js file)
 * @param {object} accountDescription - Specific info about the account (find the data in data.js file)
 * @returns {JSX}
 */
function AccountTransaction({
  accountName,
  accountAmount,
  accountDescription,
}) {
  return (
    <AccountContainer>
      <AccountContentWrapper>
        <AccountTitle>{accountName}</AccountTitle>
        <AccountAmount>{accountAmount}</AccountAmount>
        <AccountAmountDescription>
          {accountDescription}
        </AccountAmountDescription>
      </AccountContentWrapper>
      <AccountContentWrapperCTA>
        <TransactionButton>View transactions</TransactionButton>
      </AccountContentWrapperCTA>
    </AccountContainer>
  );
}

// Style

const AccountContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const AccountContentWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const AccountAmountDescription = styled.p`
  margin: 0;
`;

const AccountContentWrapperCTA = styled(AccountContentWrapper)`
  @media (min-width: 720px) {
    flex: 0;
  }
`;

const TransactionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;

  @media (min-width: 720px) {
    width: 200px;
  }
`;

export default AccountTransaction;
