import { getProjectTitle } from './appInfo';
import './styles.css';

function App() {
  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Курсовая работа</p>
        <h1>{getProjectTitle()}</h1>
        <p>
          Базовая инфраструктура проекта успешно подготовлена. Интеграция с Dialogflow CX будет
          добавлена на следующих этапах разработки.
        </p>
        <div className="status">Frontend работает</div>
      </section>
    </main>
  );
}

export default App;
