import { NextPage } from 'next'
import { PropsWithChildren } from 'react'

interface TypeRoles {
	isOnlyAdmin?: boolean
	isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentsAuthFields = {
	Component: TypeRoles
} & PropsWithChildren
