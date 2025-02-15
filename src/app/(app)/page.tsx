import App from '@/App';
import '../../index.css';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return  <App />;
}
