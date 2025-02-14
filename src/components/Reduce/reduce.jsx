const result = {
  data: {
    expert: {
      insights: {
        searchInsightsV2: [
          {
            id: "insight1",
            tenantId: "tenant1",
            expertId: "expert1",
            kpiOutput: {
              name: "TNPS",
              description: "Transactional NPS",
            },
            kpiValue: 75.4,
            previousKpiValue: 70.1,
            kpiContext: [
              {
                key: "context1",
                value: "value1",
              },
            ],
            kpiDurationStartTs: "2023-01-01",
            kpiDurationEndTs: "2023-01-31",
            kpiDurationScale: "MONTH",
            serviceSpecializationOutput: {
              id: "ss1",
              name: "Service Specialization 1",
              alias: "SS1",
            },
            kpiMeasurementLevel: "SERVICE_SPECIALIZATION",
            insightLevel: "SATISFIED",
            teamKPIValue: 72.3,
            networkKPIValue: 68.5,
            auditOutput: {
              createdBy: "user1",
              createdOn: "2023-02-01",
              updatedBy: "user2",
              updatedOn: "2023-02-15",
            },
          },
          {
            id: "insight2",
            tenantId: "tenant1",
            expertId: "expert1",
            kpiOutput: {
              name: "PRS",
              description: "Product Satisfaction",
            },
            kpiValue: 85.2,
            previousKpiValue: 83.4,
            kpiContext: [
              {
                key: "context2",
                value: "value2",
              },
            ],
            kpiDurationStartTs: "2023-01-01",
            kpiDurationEndTs: "2023-01-31",
            kpiDurationScale: "MONTH",
            serviceSpecializationOutput: {
              id: "ss1",
              name: "Service Specialization 1",
              alias: "SS1",
            },
            kpiMeasurementLevel: "SERVICE_SPECIALIZATION",
            insightLevel: "GOAL",
            teamKPIValue: 80.5,
            networkKPIValue: 78.9,
            auditOutput: {
              createdBy: "user1",
              createdOn: "2023-02-01",
              updatedBy: "user2",
              updatedOn: "2023-02-15",
            },
          },
          {
            id: "insight3",
            tenantId: "tenant1",
            expertId: "expert1",
            kpiOutput: {
              name: "TNPS",
              description: "Transactional NPS",
            },
            kpiValue: 78.9,
            previousKpiValue: 75.0,
            kpiContext: [
              {
                key: "context1",
                value: "value1",
              },
            ],
            kpiDurationStartTs: "2023-02-01",
            kpiDurationEndTs: "2023-02-28",
            kpiDurationScale: "MONTH",
            serviceSpecializationOutput: {
              id: "ss2",
              name: "Service Specialization 2",
              alias: "SS2",
            },
            kpiMeasurementLevel: "SERVICE_SPECIALIZATION",
            insightLevel: "SATISFIED",
            teamKPIValue: 74.8,
            networkKPIValue: 71.4,
            auditOutput: {
              createdBy: "user1",
              createdOn: "2023-03-01",
              updatedBy: "user2",
              updatedOn: "2023-03-15",
            },
          },
          {
            id: "insight4",
            tenantId: "tenant1",
            expertId: "expert1",
            kpiOutput: {
              name: "PRS",
              description: "Product Satisfaction",
            },
            kpiValue: 89.3,
            previousKpiValue: 87.6,
            kpiContext: [
              {
                key: "context2",
                value: "value2",
              },
            ],
            kpiDurationStartTs: "2023-02-01",
            kpiDurationEndTs: "2023-02-28",
            kpiDurationScale: "MONTH",
            serviceSpecializationOutput: {
              id: "ss2",
              name: "Service Specialization 2",
              alias: "SS2",
            },
            kpiMeasurementLevel: "SERVICE_SPECIALIZATION",
            insightLevel: "CRITICAL",
            teamKPIValue: 83.7,
            networkKPIValue: 81.2,
            auditOutput: {
              createdBy: "user1",
              createdOn: "2023-03-01",
              updatedBy: "user2",
              updatedOn: "2023-03-15",
            },
          },
          {
            id: "insight5",
            tenantId: "tenant1",
            expertId: "expert1",
            kpiOutput: {
              name: "TNPS",
              description: "Transactional NPS",
            },
            kpiValue: 82.1,
            previousKpiValue: 77.9,
            kpiContext: [
              {
                key: "context1",
                value: "value1",
              },
            ],
            kpiDurationStartTs: "2023-03-01",
            kpiDurationEndTs: "2023-03-31",
            kpiDurationScale: "MONTH",
            serviceSpecializationOutput: {
              id: "ss3",
              name: "Service Specialization 3",
              alias: "SS3",
            },
            kpiMeasurementLevel: "SERVICE_SPECIALIZATION",
            insightLevel: "GOAL",
            teamKPIValue: 76.9,
            networkKPIValue: 73.4,
            auditOutput: {
              createdBy: "user1",
              createdOn: "2023-04-01",
              updatedBy: "user2",
              updatedOn: "2023-04-15",
            },
          },
          {
            id: "insight6",
            tenantId: "tenant1",
            expertId: "expert1",
            kpiOutput: {
              name: "PRS",
              description: "Product Satisfaction",
            },
            kpiValue: 91.5,
            previousKpiValue: 90.1,
            kpiContext: [
              {
                key: "context2",
                value: "value2",
              },
            ],
            kpiDurationStartTs: "2023-03-01",
            kpiDurationEndTs: "2023-03-31",
            kpiDurationScale: "MONTH",
            serviceSpecializationOutput: {
              id: "ss3",
              name: "Service Specialization 3",
              alias: "SS3",
            },
            kpiMeasurementLevel: "SERVICE_SPECIALIZATION",
            insightLevel: "GOAL",
            teamKPIValue: 88.2,
            networkKPIValue: 84.7,
            auditOutput: {
              createdBy: "user1",
              createdOn: "2023-04-01",
              updatedBy: "user2",
              updatedOn: "2023-04-15",
            },
          },
        ],
      },
    },
  },
};

const groupServiceByMetric = result?.data?.expert?.insights?.searchInsightsV2?.reduce((acc, curr) => {
  const ssName = curr?.serviceSpecializationOutput?.alias;

  if (!ssName && !acc[ssName]) {
    acc[ssName] = [];
  }
  if (acc[ssName]) {
    acc[ssName].push(curr);
  }

  return acc;
}, {});
