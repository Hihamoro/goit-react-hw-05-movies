import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from '../styled/SharedLayout.styled';

export default function SharedLayout() {
    return (
        <Container>
            <Header>
                <nav>
                    <Link key="home" to="/" end>
                        Home
                    </Link>
                    <Link key="movies" to="/movies">
                        Movies
                    </Link>
                </nav>
            </Header>
            <main>
                <Suspense fallback={null}>
                    <Outlet />
                </Suspense>
            </main>
        </Container>
    );
}