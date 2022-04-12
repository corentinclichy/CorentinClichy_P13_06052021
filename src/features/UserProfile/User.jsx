import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Style
import styled from "styled-components";

// Components
import AccountTransaction from "../../components/AccountTransaction";

// Data
import { accountTransactions } from "../../data";
import { fetchUserProfile, selectUserProfile, updateUserProfile } from "./userProfileSlice";
import { selectUserData } from "../Login/userSlice";

/**
 * @name User
 * @description User page
 * @param {object} props
 * @returns {JSX}
 */
function User () {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ updating, setUpdating ] = useState(false);

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    const { token, isConnected } = useSelector(selectUserData);

    useEffect(() => {
        dispatch(fetchUserProfile({ token }));
    }, [ dispatch ]);

    const user = useSelector(selectUserProfile);

    if (isConnected === null) {
        history.push("/sign-in");
    }

    const toggleEditMode = () => {
        setUpdating(!updating);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        const payload = {
            token,
            payload: {
                firstName,
                lastName,
            }
        };

        dispatch(
            updateUserProfile(payload)
        ).then((res) => {
            setUpdating(false);
        });

        setUpdating(false);
    };

    const fullName = `${user.firstName} ${user.lastName}`;

    return (
        <>
            <HeaderContainer>
                <h1>
                    Welcome back
                    <br />
                    {fullName}
                </h1>
                {updating ?
                    <form onSubmit={handleSubmitForm}>
                        <FieldContainer>
                            <InputField type="text" className="form-control" id="firstName" placeholder={user.firstName} value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                            <InputField type="text" className="form-control" id="lastName" placeholder={user.lastName} value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </FieldContainer>
                        <ButtonContainer>
                            <FormButton type='submit' className="btn btn-primary">Submit</FormButton>
                            <FormButton onClick={toggleEditMode}>Cancel</FormButton>
                        </ButtonContainer>

                    </form>
                    : <EditBtn onClick={toggleEditMode}>Edit Name</EditBtn>}
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
  color: #2D3F51;
  margin-bottom: 2rem;
`;

const EditBtn = styled.button`
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

const FieldContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.input`
    height:30px;
    border-radius: 5px;
    border: 2px solid lightgray;
    padding: 5px 15px;
    font-size:14px;
    margin-bottom:10px;

    &::placeholder {
        color: lightgray;
        font-size: 1em;
      }
`;

const FormButton = styled.button`
color: #8D83F8;
padding: 5px 15px;
font-weight: 400;
border: 1px solid #8D83F8;
background: #fff;
border-radius: 5px;
display: flex;
gap; 20px;

`;

const ButtonContainer = styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
`;

export default User;
