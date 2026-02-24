import { PermissionLabel } from "./PermissionLabel"
import { RoleLabel } from "./RoleLabel"

// Define permissions for each roles
const roles_to_permissions = new Map<RoleLabel, PermissionLabel[]>([])
roles_to_permissions.set(RoleLabel.USER, [
    PermissionLabel.EDIT_OWN_ACCOUNT,
    PermissionLabel.DELETE_OWN_ACCOUNT
])

// Retrieve permissions for a given role with the above hashmap
export function getPermissions(label: RoleLabel) : PermissionLabel[]{
    const permissions = roles_to_permissions.get(label)
    if(permissions === undefined)return []
    return permissions
}