import { Request, Response } from "express";
import { Role } from "../models/role.model";
const MOCK_DATA_ON = process.env.MOCK_DATA_ON;

import { STATUS_CODE } from "../utils/statusCode.utils";
import {
  createMockRole,
  deleteMockRoleById,
  getAllMockRoles,
  getMockRoleById,
  updateMockRoleById,
} from "../mocks/tools/role.mock.db";
import {
  createNewRoleQuery,
  deleteRoleByIdQuery,
  getAllRolesQuery,
  getRoleByIdQuery,
  updateRoleByIdQuery,
} from "../utils/role.utils";

export async function getAllRoles(
  req: Request,
  res: Response
): Promise<any> {
  try {
    if (MOCK_DATA_ON === "true") {
      const roles = getAllMockRoles();

      if (roles) {
        return res.status(200).json(STATUS_CODE[200](roles));
      }

      return res.status(204).json(STATUS_CODE[204](roles));
    } else {
      const roles = await getAllRolesQuery();

      if (roles) {
        return res.status(200).json(STATUS_CODE[200](roles));
      }

      return res.status(204).json(STATUS_CODE[204](roles));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function getRoleById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const roleId = parseInt(req.params.id);

    if (MOCK_DATA_ON === "true") {
      const role = getMockRoleById(roleId);

      if (role) {
        return res.status(200).json(STATUS_CODE[200](role));
      }

      return res.status(404).json(STATUS_CODE[404](role));
    } else {
      const role = await getRoleByIdQuery(roleId);

      if (role) {
        return res.status(200).json(STATUS_CODE[200](role));
      }

      return res.status(404).json(STATUS_CODE[404](role));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function createRole(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const newRole: {
      projectId: number;
    } = req.body;

    if (!newRole.projectId) {
      return res.status(400).json(
        STATUS_CODE[400]({
          message: "projectId is required",
        })
      );
    }

    if (MOCK_DATA_ON === "true") {
      const createdRole = createMockRole(newRole);

      if (createdRole) {
        return res.status(201).json(STATUS_CODE[201](createdRole));
      }

      return res.status(503).json(STATUS_CODE[503]({}));
    } else {
      const createdRole = await createNewRoleQuery(newRole);

      if (createdRole) {
        return res.status(201).json(STATUS_CODE[201](createdRole));
      }

      return res.status(503).json(STATUS_CODE[503]({}));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function updateRoleById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const roleId = parseInt(req.params.id);
    const updatedRole: {
      projectId: number;
    } = req.body;

    if (!updatedRole.projectId) {
      return res.status(400).json(
        STATUS_CODE[400]({
          message: "projectId is required",
        })
      );
    }

    if (MOCK_DATA_ON === "true") {
      const role = updateMockRoleById(
        roleId,
        updatedRole
      );

      if (role) {
        return res.status(202).json(STATUS_CODE[202](role));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    } else {
      const role = await updateRoleByIdQuery(
        roleId,
        updatedRole
      );

      if (role) {
        return res.status(202).json(STATUS_CODE[202](role));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}

export async function deleteRoleById(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const roleId = parseInt(req.params.id);

    if (MOCK_DATA_ON === "true") {
      const deletedRole = deleteMockRoleById(roleId);

      if (deletedRole) {
        return res.status(202).json(STATUS_CODE[202](deletedRole));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    } else {
      const deletedRole = await deleteRoleByIdQuery(roleId);

      if (deletedRole) {
        return res.status(202).json(STATUS_CODE[202](deletedRole));
      }

      return res.status(404).json(STATUS_CODE[404]({}));
    }
  } catch (error) {
    return res.status(500).json(STATUS_CODE[500]((error as Error).message));
  }
}
