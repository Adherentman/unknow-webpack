import gql from 'graphql-tag';

export const REGISTER_Ql = gql`
	mutation RegisterUser(
		$username: String
		$password: String
		$confirm: String
		$email: String
	) {
		RegisterUser(
			username: $username
			password: $password
			confirm: $confirm
			email: $email
		) {
			username
			password
			confirm
			email
		}
	}
`;

export const LOGIN_QL = gql`
	query Login($username: String, $password: String) {
		Login(username: $username, password: $password) {
			message
		}
	}
`;
