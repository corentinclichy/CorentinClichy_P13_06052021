import React from "react";

// Style
import styled from "styled-components";

// Components
import AccountTransaction from "../components/AccountTransaction";

// Data
import { accountTransactions } from "../data";

/**
 * @name User
 * @description User page
 * @param {object} props
 * @returns {JSX}
 */
function User() {
  return (
    <>
      <HeaderContainer>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <EditBtn>Edit Name</EditBtn>
      </HeaderContainer>
      <h2 className="sr-only">Accounts</h2>
      {accountTransactions.map((account, index) => (
        <AccountTransaction
          accountName={account.accountName}
          accountAmount={account.accountAmount}
          accountDescription={account.accountDescription}
          key={index}
        />
      ))}
    </>
  );
}

// Styles

const HeaderContainer = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;

const EditBtn = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

export default User;
