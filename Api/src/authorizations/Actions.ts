import { exit } from "process";
import { prisma } from "..";
import { PermissionLabel } from "./PermissionLabel";
import { RoleLabel } from "./RoleLabel";
import bcrypt from 'bcrypt';
import { CustomError } from "../types/classes/CustomError";
import { getPermissions } from "./RolesAndPerms";
import { logger } from "../config/logger";
import { roleExists } from "../tools/VerifyExists";

if( !process.env.ROOT_USER_EMAIL){
    new CustomError("404","Specify an email for the root super-user in the '.env' file. (ROOT_USER_EMAIL)", null)
    exit(1)
}
if( !process.env.ROOT_USER_PASSWORD){
    new CustomError("404","Specify a password for the root super-user in the '.env' file. (ROOT_USER_PASSWORD)", null)
    exit(1)
}

// Define root user
const rootUser = {
    name: "root",
    password: process.env.ROOT_USER_PASSWORD,
    email: process.env.ROOT_USER_EMAIL,
    creationDate: new Date(),
    token: "",
    tokenExpiry: new Date(),
    lastLogin: new Date(),
    role: {
        connect: {label: RoleLabel.SUPERADMIN}
    }
}

// Initialization script
export async function initPermissions(){
    const permissions: { label: string }[] = []
    const salt = await bcrypt.genSalt();
    const hashedRootPassword = await bcrypt.hash(rootUser.password, salt)

    // Create permissions
    for (const item of Object.values(PermissionLabel)) {
        permissions.push({ label: item })
        await prisma.permission.upsert({
            where: { label: item },
            update: {},
            create: { label: item }
        })
        logger.info(`Permission ${item} ensured.`)
    }

    // Create Super-Admin role
    if(! await roleExists(RoleLabel.SUPERADMIN)){
        logger.info("Creating role : " + RoleLabel.SUPERADMIN)
        await prisma.role.create({data: {label: RoleLabel.SUPERADMIN, permissions: {connect: permissions}}})
    }else {
        logger.info("Updating role : " + RoleLabel.SUPERADMIN)
        await prisma.role.update({
            where: { label: RoleLabel.SUPERADMIN },
            data: { permissions: { set: permissions.map(p => ({ label: p.label })) } }
        })
    }

    // Create Roles
    for(const item in RoleLabel){
        if(item === RoleLabel.SUPERADMIN)continue
        else{
            if(! await roleExists(item)){
                logger.info(`Creating role : ${item}`)
                await prisma.role.create({data: {label: item, permissions: {connect: getPermissions(item as RoleLabel).map(p => ({ label: p }))}}})
            }else logger.error(`Role ${item} already exists !`)
        }
    }

    // Ensure super-user account
    await prisma.user.upsert({
        where: { email: rootUser.email },
        update: { role: { connect: { label: RoleLabel.SUPERADMIN } } },
        create: { ...rootUser, password: hashedRootPassword }
    })
    logger.info("Super-user ensured.")

    // Success
    logger.info("Permissions, roles, and super-user were successfully initialized !")
    return 0
}

export async function updatePermissions(){
    const salt = await bcrypt.genSalt();
    const permissions: { label: string }[] = []
    const hashedRootPassword = await bcrypt.hash(rootUser.password, salt)

    // Create permissions
    for (const item of Object.values(PermissionLabel)) {
        permissions.push({ label: item })
        await prisma.permission.upsert({
            where: { label: item },
            update: {},
            create: { label: item }
        })
        logger.info(`Permission ${item} ensured.`)
    }

    // Create Super-Admin role
    if(! await roleExists(RoleLabel.SUPERADMIN)){
        logger.info("Creating role : " + RoleLabel.SUPERADMIN)
        await prisma.role.create({data: {label: RoleLabel.SUPERADMIN, permissions: {connect: permissions}}})
    }else {
        logger.info("Updating role : " + RoleLabel.SUPERADMIN)
        await prisma.role.update({
            where: { label: RoleLabel.SUPERADMIN },
            data: { permissions: { set: permissions.map(p => ({ label: p.label })) } }
        })
    }

    // Create Roles
    for(const item in RoleLabel){
        if(item === RoleLabel.SUPERADMIN)continue
        else{
            if(! await roleExists(item)){
                logger.info(`Creating role : ${item}`)
                await prisma.role.create({data: {label: item, permissions: {connect: getPermissions(item as RoleLabel).map(p => ({ label: p }))}}})
            }else logger.info(`Role ${item} already exists !`)
        }
    }

    // Ensure super-user account
    await prisma.user.upsert({
        where: { email: rootUser.email },
        update: { role: { connect: { label: RoleLabel.SUPERADMIN } } },
        create: { ...rootUser, password: hashedRootPassword }
    })
    logger.info("Super-user ensured.")

    // Success
    logger.info("Permissions, roles, and super-user were successfully initialized !")
    return 0
}
