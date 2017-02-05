export default function getBaseUrl() {
    const isInDevelopment = window.location.hostname === 'localhost';
    return isInDevelopment ? 'http://localhost:3001/' : '/';
}
