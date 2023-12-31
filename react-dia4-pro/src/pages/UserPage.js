import { UserRow } from "../components/UserRow";
import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
    const { users } = useUsers();
    return (
        <div className="mt-5">
            <h1>Listado de Usuarios</h1>
            <hr />
            <table className="table">
                <thead>
                    <th>id</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Avatar</th>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <UserRow
                                key={user.email}
                                user={user}

                            >

                            </UserRow>

                        ))

                    }
                </tbody>

            </table>

        </div>
    )


}