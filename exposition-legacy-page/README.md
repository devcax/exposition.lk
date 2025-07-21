# Our Legacy Page

This project is dedicated to showcasing past issues of the Exposition magazine through the "Our Legacy" page. The page allows users to view magazine covers, titles, publication dates, and detailed descriptions of each issue.

## Project Structure

- **src/components**
  - **LegacyPage.tsx**: Main component for the "Our Legacy" page, displaying a list of past magazine issues.
  - **MagazineCard.tsx**: Represents a single magazine issue card with cover, title, and publication date.
  - **IssueModal.tsx**: Modal component for detailed information about a selected magazine issue.
  - **BackButton.tsx**: Button component for navigating back to the previous page.

- **src/types**
  - **magazine.ts**: TypeScript interfaces defining the structure of magazine issue objects.

- **src/data**
  - **magazineIssues.ts**: Array of magazine issue objects containing data for past issues.

- **src/assets/magazine-covers**: Directory containing cover images for the magazine issues.

- **src/styles**
  - **legacy.css**: CSS styles specific to the "Our Legacy" page.

- **src/utils**
  - **navigation.ts**: Utility functions for navigation.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd exposition-legacy-page
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Features

- View past Exposition magazine issues with cover images and publication details.
- Click on a magazine card to view more details in a modal.
- Navigate back to the previous page using the back button.

## Usage Guidelines

- Ensure that all magazine cover images are placed in the `src/assets/magazine-covers` directory and named according to their respective issues.
- Update the `src/data/magazineIssues.ts` file to add or modify magazine issue data.
- Customize styles in `src/styles/legacy.css` to match the desired design for the "Our Legacy" page.