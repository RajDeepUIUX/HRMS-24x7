# Benefits Module Design

**Date:** 2026-05-15
**Status:** Approved

---

## Overview

A new **Benefits** module under Human Resources with two tabs: Benefits Catalog and Benefits History. Includes a 2-step Assign Benefits drawer and a read-only View Allocation Summary drawer.

---

## Architecture

### Files to create
- `src/app/components/BenefitsView.tsx` — main view, tab switcher, hosts both drawers, owns allocation history state
- `src/app/components/AssignBenefitsDrawer.tsx` — 2-step assign flow (form → preview → success modal)
- `src/app/components/ViewAllocationDrawer.tsx` — read-only allocation summary

### Files to modify
- `CollapsibleSidebar.tsx` — add `benefits` under Human Resources submenu
- `UnifiedHRApplication.tsx` — add `'benefits'` to ViewType + renderMainContent case
- `App.tsx` — add `'benefits'` to ViewType + validViews array

---

## Data Types

```ts
interface Benefit {
  id: string;
  name: string;
  description: string;
}

interface StaffMember {
  id: string;
  name: string;
  department: string;
}

interface AllocationRecord {
  id: string;
  benefit: Benefit;
  department: string;
  mode: 'Lumpsum Value' | 'Value Per Staff';
  assignedOn: string;
  disbursementDate: string;
  staffMembers: StaffMember[];  // source of truth; count = staffMembers.length
  currency: string;
  // For Lumpsum: value = total amount (per-staff = value / count)
  // For Per Staff: value = per-staff amount (total = value * count)
  value: number;
  status: 'Completed' | 'Pending';
}
```

### Mock Data
- **5 catalog benefits:** Health Insurance, Meal Allowance, Transport Allowance, Annual Bonus, Gym Membership
- **3 departments:** Accounting (6 staff), Audit (7 staff), Tax (5 staff)
- **Currencies:** USD, EUR, INR, GBP
- **Initial history:** empty (populated after first Confirm & Allocate)

---

## Benefits Catalog Tab

- Table columns: Benefit Name | Description | Action
- Table header: `bg-[#ebeefd]`, same as rest of app
- Action per row: outlined blue "Assign Benefits" button
- Primary CTA in header: filled blue "Add Custom Benefits" button (no-op for now)
- Mobile: card view (same pattern as other modules)

---

## Assign Benefits Drawer

**Trigger:** clicking "Assign Benefits" on a catalog row  
**Width:** `max-w-[600px]`, right-side spring animation

### Step 1 — Form

Fields (top to bottom):
1. **Benefit Name** — read-only grey input, auto-filled from selected row
2. **Description** — read-only grey input, auto-filled from selected row
3. **Allocation Mode** — segment toggle: `Lumpsum Value` | `Value Per Staff`
4. **Department** — dropdown; on change, clears staff selection and auto-populates staff list
5. **Select Staff** — bordered scrollable panel (max-h ~220px):
   - Search bar at top filters list in real time
   - "Select All" checkbox + "Clear All" text button
   - Individual checkboxes per staff member
   - Selected staff shown as dismissible chips below the panel
   - Count label: "X staff selected"
6. **Currency** (left, half-width) + **Enter Value** (right, half-width, currency suffix on right)
7. **Disbursement Date** — date picker
8. **Informative allocation message** — live-computed box:
   - Lumpsum: "Total 5,000 USD ÷ 12 staff = 416.67 USD per staff"
   - Per Staff: "Each of 12 staff gets 5,000 USD. Total: 60,000 USD"
   - Only visible when value + staff count > 0

**Footer:** `Cancel` (outline) | `Preview Allocation` (blue, disabled until all required fields filled)

Required fields: department, at least 1 staff, currency, value > 0, disbursementDate

### Step 2 — Preview

Replaces form content in the same drawer (header changes to "Preview Allocation").

- Table: Employee | Allocated Benefit | Value
  - Lumpsum: value = total ÷ staffCount, shown to 2 decimal places
  - Per Staff: value = entered value per row
- Total Allocation Summary card below table:
  | Field | Value |
  |---|---|
  | Allocation Mode | Lumpsum Value |
  | Selected Staff | 12 |
  | Currency | USD |
  | Value Per Staff | 416.67 USD |
  | Total Allocation | 5,000 USD |

**Footer:** `Back` | `Confirm & Allocate` (blue)

### Success Modal

Centered overlay modal (not full-screen) after Confirm & Allocate:
- Title: "Benefit Allocated Successfully"
- Body: "The selected benefit has been successfully allocated to the selected staff members. You can view the allocation details in the Benefits History tab."
- Single CTA: "OK"
- On OK: close drawer + modal, switch to Benefits History tab, prepend new AllocationRecord to history list

---

## Benefits History Tab

Table columns: Benefit Name | Description | Department | Mode | Assigned On | Disbursement Date | No. of Staffs | Amount | Status | Action

- Status badges: `Completed` → `bg-[#ecfdf3] text-[#027a48]`, `Pending` → `bg-[#fffbeb] text-[#b45309]`
- Action: outlined blue "View" button per row
- Empty state when no allocations exist
- Mobile: card view

---

## View Allocation Summary Drawer

**Trigger:** clicking "View" on a History row  
**Width:** `max-w-[600px]`, same animation

Content:
1. **Summary grid** (2-column key/value layout): all 10 fields from AllocationRecord
2. **Staff Allocation table**: Employee | Allocated Benefit | Value (scrollable)

Read-only, no footer CTAs.

---

## Navigation Wiring

- Sidebar: add `{ id: 'benefits', label: 'Benefits', active: currentView === 'benefits' }` to HR submenu
- HR active condition: extend to include `currentView === 'benefits'`
- `getInitialExpandedSection()`: no change needed (defaults to `human-resources`)

---

## Design Tokens (consistent with project)
- Primary: `#3a58ef`
- Table header: `bg-[#ebeefd]`
- Border: `#eaecf0`
- Text dark: `#101828`
- Text medium: `#344054`
- Text muted: `#667085`
- Background: `#f2f4f7`
- Shadow: `shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]`
- Animation: `motion/react`, spring `damping: 32, stiffness: 320`
