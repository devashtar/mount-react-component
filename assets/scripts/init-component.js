'use-strict'

function loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.defer = false
    script.crossOrigin = ''
    document.head.append(script)
}
loadScript('https://unpkg.com/react@18/umd/react.production.min.js')
loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js')

/* Стили */
const layoutStyles = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'fixed',
    left: '0',
    top: '0',

    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const styles = {
    backgroundColor: '#fefefe',
    padding: '0.5rem',

    minWidth: '280px',
    maxWidth: '600px',
    width: '50%',
    height: '50%',

    textAlign: 'center',
    color: '#222222',

    borderRadius: '0.5rem',
}

/* Если найден блок с переданным id, то отдаём его, иначе создаём новый */
function getElement(id) {
    let cont = document.getElementById(id)
    if (cont) return cont
    cont = document.createElement('div')
    cont.id = 'my_modal'
    document.body.prepend(cont)
    return cont
}

/* Вспомогательная функция для создания компонента */
window.picea = {
    run: function (id = '', param = {}) {
        const Modal = () => {
            const [display, setDisplay] = React.useState(true)
            return (
                <>
                    {display && (
                        <div
                            style={layoutStyles}
                            onClick={() => setDisplay(false)}
                        >
                            <div style={styles}>
                                <h3>Params</h3>
                                <pre>
                                    <code>{JSON.stringify(param, 2)}</code>
                                </pre>
                            </div>
                        </div>
                    )}
                </>
            )
        }

        const container = getElement(id)
        const root = ReactDOM.createRoot(container)
        root.render(<Modal />)
    },
}
