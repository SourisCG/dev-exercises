import { useLocalStorage } from './useLocalStorage'

// Demo page. No TODO here. It uses YOUR hook.
// Type a name, reload the page - the name is still there!
export function NameSaver() {
  const [name, setName] = useLocalStorage('name', '')
  return (
    <div>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name === '' ? 'stranger' : name}!</p>
    </div>
  )
}
