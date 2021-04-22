import { gql } from '@apollo/client';

export const companyQuery = gql`
  query {
    company {
      name
      summary
      ceo
      headquarters {
        city
      }
      employees
    }
  }
`;

export const launchesQuery = gql`
  query {
    launchesPastResult {
      data {
        id
        launch_date_utc
        mission_name
        launch_site {
          site_name
        }
        rocket {
          rocket_name
        }
        launch_success
      }
    }
  }
`;

export const rocketsQuery = gql`
  query {
    rockets {
      name
      mass {
        kg
      }
      cost_per_launch
      stages
      success_rate_pct
      active
      id
    }
  }
`;
