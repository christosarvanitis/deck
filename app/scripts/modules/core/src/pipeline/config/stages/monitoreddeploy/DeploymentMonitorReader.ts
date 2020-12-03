import { REST } from 'core/api';

export interface IDeploymentMonitorDefinition {
  id: string;
  name: string;
  supportContact: string;
}

export class DeploymentMonitorReader {
  public static getDeploymentMonitors(): PromiseLike<IDeploymentMonitorDefinition[]> {
    return REST().path('capabilities', 'deploymentMonitors').useCache(true).get();
  }
}
