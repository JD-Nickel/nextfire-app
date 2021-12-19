import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
    const user = null;
    const username = null;

    // 1. if the user is signed out (i.e. user -> : <SignInButton />)
    // 2. if the user is signed in, but missing username (i.e. user -> !username ? <UsernameForm />)
    // 3. if the user is signed in, and has username (i.e. user -> !username : <SignOutButton />)

    return (
        <main>
            {user ?
                !username ? <UsernameForm /> : <SignOutButton />
                :
                <SignInButton />
            }

        </main>
    )
}

// Sign in with Google button
function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider)
    }

    return (
        <button className="btn-google" onClick={signInWithGoogle}>
            <img src={'/google.png'} /> Sign in with Google
        </button>
    )
}

// Sign out button
function SignOutButton() {
    return <button onClick={() => auth.signOut()}>
        Sign out
    </button>
}

function UsernameForm() {

}