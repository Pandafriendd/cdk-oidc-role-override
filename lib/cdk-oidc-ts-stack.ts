import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam';

// import * as sqs from '@aws-cdk/aws-sqs';

export class CdkOidcTsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
  
    
    const provider = new iam.OpenIdConnectProvider(this, 'Provider', {
      url: 'https://exmaple.com',
    });
    
    const childCR = this.node.tryFindChild('Custom::AWSCDKOpenIdConnectProviderCustomResourceProvider') as cdk.CustomResourceProvider;
    const childRole = childCR.node.tryFindChild('Role') as cdk.CfnResource;
    childRole.addOverride("Properties.RoleName", "test_role_name");
  
    
  }
}
