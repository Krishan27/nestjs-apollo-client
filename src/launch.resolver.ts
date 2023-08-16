import { Query, Resolver } from '@nestjs/graphql';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'; // Import from @apollo/client
import { GQLLaunch } from './spacex/generated';

@Resolver()
export class LaunchResolver {
  private readonly client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      uri: 'https://spacex-production.up.railway.app/graphql',
      cache: new InMemoryCache(),
    });
  }

  @Query('launches')
  async getLaunches(): Promise<GQLLaunch[]> {
    const response = await this.client.query({
      query: gql`
        query GetLaunches {
          launches {
            mission_name
            launch_date_utc
          }
        }
      `,
    });

    return response.data.launches;
  }
}
