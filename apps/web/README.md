# Web Application

A Next.js 15 application built with React 19, Tailwind CSS v4, and a comprehensive collection of preinstalled ShadCN UI components for rapid prototyping and experimentation.

## Getting Started

Refer to parent README for details on how to run the entire application.

## Technology Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Component Library:** ShadCN UI (new-york style)
- **Icons:** Lucide React

## ShadCN Components

This project includes a comprehensive collection of preinstalled ShadCN UI components ready for experimentation and development. All components are located in:

```
apps/web/src/components/ui
```

### Usage Example

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Example Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click Me</Button>
      </CardContent>
    </Card>
  )
}
```

## Component Library

Below is a comprehensive list of all preinstalled components:

| Component | Description |
|-----------|-------------|
| [Accordion](https://ui.shadcn.com/docs/components/accordion) | Collapsible content sections with smooth animations for FAQs and content organization |
| [Alert](https://ui.shadcn.com/docs/components/alert) | Display important messages and notifications with different severity levels |
| [Alert Dialog](https://ui.shadcn.com/docs/components/alert-dialog) | Modal dialog for critical confirmations and alerts that interrupt user flow |
| [Aspect Ratio](https://ui.shadcn.com/docs/components/aspect-ratio) | Maintain consistent width-to-height ratios for media content |
| [Avatar](https://ui.shadcn.com/docs/components/avatar) | Display user profile pictures with fallback initials or icons |
| [Badge](https://ui.shadcn.com/docs/components/badge) | Small labels for status indicators, tags, and counts |
| [Breadcrumb](https://ui.shadcn.com/docs/components/breadcrumb) | Navigation component showing the current page's location in the site hierarchy |
| [Button](https://ui.shadcn.com/docs/components/button) | Interactive button with multiple variants and sizes for user actions |
| [Button Group](https://ui.shadcn.com/docs/components/button-group) | Group related buttons together with consistent styling |
| [Calendar](https://ui.shadcn.com/docs/components/calendar) | Date picker with month/year navigation for selecting dates |
| [Card](https://ui.shadcn.com/docs/components/card) | Container component for grouping related content with header and footer sections |
| [Carousel](https://ui.shadcn.com/docs/components/carousel) | Slideshow component for cycling through images or content |
| [Chart](https://ui.shadcn.com/docs/components/chart) | Data visualization components built with Recharts for displaying charts and graphs |
| [Checkbox](https://ui.shadcn.com/docs/components/checkbox) | Toggle input for binary choices and multi-select forms |
| [Collapsible](https://ui.shadcn.com/docs/components/collapsible) | Show and hide content sections with smooth transitions |
| [Command](https://ui.shadcn.com/docs/components/command) | Fast, composable command menu for search and command palette interfaces |
| [Context Menu](https://ui.shadcn.com/docs/components/context-menu) | Right-click menu with nested options and keyboard shortcuts |
| [Dialog](https://ui.shadcn.com/docs/components/dialog) | Modal overlay for focused content and user interactions |
| [Drawer](https://ui.shadcn.com/docs/components/drawer) | Slide-out panel from screen edges for navigation or forms |
| [Dropdown Menu](https://ui.shadcn.com/docs/components/dropdown-menu) | Contextual menu with actions, triggered by a button click |
| [Empty](https://ui.shadcn.com/docs/components/empty) | Placeholder state for empty content areas with optional actions |
| [Field](https://ui.shadcn.com/docs/components/field) | Form field wrapper with label, description, and error handling |
| [Form](https://ui.shadcn.com/docs/components/form) | Form components with React Hook Form integration for validation |
| [Hover Card](https://ui.shadcn.com/docs/components/hover-card) | Rich preview card that appears on hover for additional context |
| [Input](https://ui.shadcn.com/docs/components/input) | Text input field with validation states and variants |
| [Input Group](https://ui.shadcn.com/docs/components/input-group) | Combine inputs with buttons, text, or icons for enhanced functionality |
| [Input OTP](https://ui.shadcn.com/docs/components/input-otp) | One-time password input with individual character slots |
| [Item](https://ui.shadcn.com/docs/components/item) | Flexible list item component with media, content, and actions |
| [Kbd](https://ui.shadcn.com/docs/components/kbd) | Display keyboard shortcuts and commands in documentation |
| [Label](https://ui.shadcn.com/docs/components/label) | Accessible form labels with proper ARIA associations |
| [Menubar](https://ui.shadcn.com/docs/components/menubar) | Horizontal menu bar with dropdown menus for application navigation |
| [Navigation Menu](https://ui.shadcn.com/docs/components/navigation-menu) | Complex navigation with dropdowns and mega menus |
| [Pagination](https://ui.shadcn.com/docs/components/pagination) | Navigate through multiple pages of content |
| [Popover](https://ui.shadcn.com/docs/components/popover) | Floating content container anchored to a trigger element |
| [Progress](https://ui.shadcn.com/docs/components/progress) | Visual indicator for task completion and loading states |
| [Radio Group](https://ui.shadcn.com/docs/components/radio-group) | Single-selection input for mutually exclusive options |
| [Resizable](https://ui.shadcn.com/docs/components/resizable) | Adjustable panels with draggable dividers for flexible layouts |
| [Scroll Area](https://ui.shadcn.com/docs/components/scroll-area) | Custom styled scrollable container with consistent cross-browser appearance |
| [Select](https://ui.shadcn.com/docs/components/select) | Dropdown selection input with search and grouping capabilities |
| [Separator](https://ui.shadcn.com/docs/components/separator) | Visual divider between content sections |
| [Sheet](https://ui.shadcn.com/docs/components/sheet) | Slide-in panel overlay from screen edges |
| [Sidebar](https://ui.shadcn.com/docs/components/sidebar) | Collapsible navigation sidebar with responsive behavior |
| [Skeleton](https://ui.shadcn.com/docs/components/skeleton) | Loading placeholder that mimics content structure |
| [Slider](https://ui.shadcn.com/docs/components/slider) | Range input for selecting numeric values with visual feedback |
| [Sonner](https://ui.shadcn.com/docs/components/sonner) | Toast notification system for temporary messages (replaces deprecated Toast) |
| [Spinner](https://ui.shadcn.com/docs/components/spinner) | Loading indicator for asynchronous operations |
| [Switch](https://ui.shadcn.com/docs/components/switch) | Toggle switch for binary on/off states |
| [Table](https://ui.shadcn.com/docs/components/table) | Data table with sortable columns and row selection |
| [Tabs](https://ui.shadcn.com/docs/components/tabs) | Organize content into multiple panels with tab navigation |
| [Textarea](https://ui.shadcn.com/docs/components/textarea) | Multi-line text input with auto-resize capabilities |
| [Toggle](https://ui.shadcn.com/docs/components/toggle) | Two-state button for toggleable options |
| [Toggle Group](https://ui.shadcn.com/docs/components/toggle-group) | Group of toggle buttons for single or multiple selections |
| [Tooltip](https://ui.shadcn.com/docs/components/tooltip) | Contextual information on hover for icons and short labels |

## Additional Resources

- [ShadCN UI Documentation](https://ui.shadcn.com)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)