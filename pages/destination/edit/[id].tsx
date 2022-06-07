import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import InputForm from '../../../components/InputForm'
import Layout from '../../../components/Layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const EditDestination = ({ destination }: any) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3),
    description: Yup.string().required().min(3),
    address: Yup.string().required().min(3),
    city: Yup.string().required().min(3),
    province: Yup.string().required().min(3),
    postalCode: Yup.number().test(
      'postalCode',
      'Must be exactly 5 character',
      (val) => val?.toString().length === 5
    ),
    telephone: Yup.number().required().min(12),
    openTime: Yup.string().required().min(3),
    openDay: Yup.string().required().min(3),
    ticket: Yup.number().required().min(4),
    website: Yup.string().required().url().min(3),
    instagram: Yup.string().required().min(3),
    // image: Yup.mixed().test('image', 'The file is too large', (value) => {
    //   if (!value.length) return true // attachment is optional
    //   return value[0].size <= 2000000
    // }),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  })

  const router = useRouter()

  const onSubmit = async (dataRequest: any, e: any) => {
    const apiUrl = `https://jti-api.herokuapp.com/v1/destination/`

    try {
      const data = {
        name: dataRequest.name,
        image: dataRequest.image[0],
        description: dataRequest.description,
        address: dataRequest.address,
        city: dataRequest.city,
        province: dataRequest.province,
        postalCode: dataRequest.postalCode,
        telephone: dataRequest.telephone,
        openTime: dataRequest.openTime,
        openDay: dataRequest.openDay,
        ticket: dataRequest.ticket,
        website: dataRequest.website,
        instagram: dataRequest.instagram,
      }

      const res = await axios.put(`${apiUrl}${destination.id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      e.target.reset()

      MySwal.fire(
        'Success!',
        'Destination Successfully Updated!',
        'success'
      ).then(() => {
        router.push('/destination')
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    }
  }

  return (
    <Layout title="Edit Destination">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/formData">
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <InputForm
            id="name"
            type="text"
            label="Name"
            placeholder="Name :"
            register={register}
            errors={errors.name}
            defaultValue={`${destination.name}`}
          />

          <InputForm
            id="city"
            type="text"
            label="City"
            placeholder="City :"
            register={register}
            errors={errors.city}
            defaultValue={destination.city}
          />
          <InputForm
            id="province"
            type="text"
            label="Province"
            placeholder="Province :"
            register={register}
            errors={errors.province}
            defaultValue={destination.province}
          />
          <InputForm
            id="postalCode"
            type="number"
            label="Postal Code"
            placeholder="Postal Code :"
            register={register}
            errors={errors.postalCode}
            defaultValue={destination.postalCode}
          />
          <InputForm
            id="telephone"
            type="number"
            label="Telephone"
            placeholder="Telephone :"
            register={register}
            errors={errors.telephone}
            defaultValue={destination.telephone}
          />
          <InputForm
            id="openTime"
            type="text"
            label="Open Time"
            placeholder="Open Time :"
            register={register}
            errors={errors.openTime}
            defaultValue={destination.openTime}
          />
          <InputForm
            id="openDay"
            type="text"
            label="Open Day"
            placeholder="Open Day :"
            register={register}
            errors={errors.openDay}
            defaultValue={destination.openDay}
          />
          <InputForm
            id="ticket"
            type="number"
            label="Ticket"
            placeholder="Ticket :"
            register={register}
            errors={errors.ticket}
            defaultValue={destination.ticket}
          />
          <InputForm
            id="website"
            type="url"
            label="Website"
            placeholder="Website :"
            register={register}
            errors={errors.website}
            defaultValue={destination.website}
          />
          <InputForm
            id="instagram"
            type="text"
            label="Instagram"
            placeholder="Instagram :"
            register={register}
            errors={errors.instagram}
            defaultValue={destination.instagram}
          />
        </div>
        <InputForm
          id="address"
          type="text"
          label="Address"
          placeholder="Address :"
          register={register}
          errors={errors.address}
          defaultValue={destination.address}
        />
        <div className="my-8">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400">
            Description
          </label>
          <textarea
            {...register('description')}
            id="description"
            name="description"
            rows={3}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
            placeholder="Description :"
            defaultValue={destination.description}
          ></textarea>
          {errors.description && (
            <div className="m-1 text-sm font-light text-red-500">
              {errors.message}
            </div>
          )}
        </div>
        <div className="mb-8 grid grid-cols-1">
          <label className="mb-1 text-xs font-semibold md:text-sm">
            Upload Photo
          </label>
          <div className="flex w-full items-center justify-center">
            <label className="group flex h-32 w-full flex-col rounded-lg border-4 border-dashed hover:border-blue-300 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  className="h-10 w-10 text-blue-400 group-hover:text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="pt-1 text-sm lowercase tracking-wider text-gray-400 group-hover:text-blue-600">
                  Select a photo
                </p>
              </div>
              <input
                {...register('image')}
                type="file"
                name="image"
                id="image"
                className="hidden"
              />
            </label>
          </div>
          {errors.image && (
            <div className="m-1 text-sm font-light text-red-500">
              {errors.message}
            </div>
          )}
        </div>
        <Link href="/destination">
          <button
            type="button"
            className="m-1 rounded-md border bg-red-600 px-4 py-2 text-sm  text-white hover:bg-red-700"
          >
            Back
          </button>
        </Link>

        <button
          type="submit"
          className="m-1 rounded-md border bg-blue-600 px-4 py-2 text-sm  text-white hover:bg-blue-700"
        >
          Create
        </button>
      </form>
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const res = await axios.get(
    `${process.env.API_URL}/destination/${context.params.id}`
  )
  const destination = res.data

  return {
    props: {
      destination,
    },
  }
}

export default EditDestination
