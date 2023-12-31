import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LaunchResolver } from './launch.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
      path: '/api/graphql',
    }),
  ],
  providers: [LaunchResolver],
})
export class SpaceXModule {}
