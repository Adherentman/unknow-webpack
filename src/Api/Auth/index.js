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
