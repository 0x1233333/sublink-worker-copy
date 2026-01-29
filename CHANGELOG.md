# Changelog

## [Unreleased] - 2026-01-29

### ✨ New Features

- **Custom Node Groups (自定义节点组)**
  - Added support for creating custom proxy groups based on Regex filtering.
  - Users can now define groups like "Netflix Nodes" or "Low Latency" dynamically via the UI.
  - Supported in Clash, Sing-box, and Surge configurations.

- **Proxy Chains / Relay (代理链路/中继)**
  - Implemented a user-friendly interface to create multi-hop proxy chains (Entry -> Exit).
  - **Clash**: Automatically handles `dialer-proxy` logic and node cloning to prevent circular dependencies.
  - **Sing-box**: Implements `detour` logic for nested outbound selectors.
  - **Surge**: Utilizes `underlying-proxy` for efficient chain management.
  - Prevents node name conflicts during chain generation.

### 🎨 UI & UX Improvements

- **Advanced Options Panel**:
  - Added dedicated accordions for "Custom Node Groups" and "Proxy Chains".
  - Improved form layout and responsiveness.
- **Components**:
  - Created `CustomNodeGroups.jsx` for managing regex-based groups.
  - Created `ProxyChains.jsx` for managing relay configurations.

### 🌐 Internationalization

- **Persian (fa)**: Added full Persian language support.
- **Fixes**: Corrected structure in `src/i18n/index.js` to ensure all keys are available across supported languages.

### 🛠 Technical Updates

- **Config Builders**: 
  - Refactored `ClashConfigBuilder`, `SingboxConfigBuilder`, and `SurgeConfigBuilder` to accept and process new advanced parameters.
  - Added `filterNodesByRegex` helper in `groupBuilder.js`.
  - Updated `createApp.jsx` to parse `customNodeGroups` and `proxyChains` from URL query parameters.
- **State Management**:
  - Updated `formLogic.js` to handle persistence and state for new dynamic fields.

---
