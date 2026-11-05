# Clean Component Architecture & Code Smells

> Derived from Clean Code JavaScript/TypeScript tailored for modern UI Engineering (React/Vue/Svelte).

---

## 1. Top 5 Frontend Code Smells to Avoid

### ❌ Smell 1: The "God Component" (Single Responsibility Violation)
* **Problem:** A single `DashboardPage.tsx` file of 900 lines containing API calls, state management, modal logic, and table rendering.
* **Fix:** Split into Container (data) vs Presentational (pure visual) components.

### ❌ Smell 2: Storing Derivable Values in State
```tsx
// ❌ BAD
const [items, setItems] = useState([]);
const [totalPrice, setTotalPrice] = useState(0); // Redundant state sync headache

// ✅ GOOD
const [items, setItems] = useState([]);
const totalPrice = useMemo(() => items.reduce((sum, item) => sum + item.price, 0), [items]);
```

### ❌ Smell 3: Boolean Prop Explosion
```tsx
// ❌ BAD (Unreadable combinations)
<Button isPrimary isSecondary isSmall isLarge isDisabled isLoading isGhost />

// ✅ GOOD (Explicit discriminated unions)
<Button variant="primary" size="sm" state="loading" />
```

### ❌ Smell 4: Prop Drilling through 4+ Layers
* **Fix:** Use Component Composition (Slots / Children) or a lightweight Context store instead of passing `userName` through 5 parent components.

---

## 2. Component Composition (Slot Pattern)

Prefer composing children over passing 20 configuration props:

```tsx
// ✅ Composable Card Pattern
<Card>
  <Card.Header title="API Credentials" badge={<Badge status="active">Active</Badge>} />
  <Card.Body>...</Card.Body>
  <Card.Footer>
    <Button variant="secondary">Regenerate</Button>
  </Card.Footer>
</Card>
```
