unless Rails.env.test? || Rails.env.development?
  credentials = Aws::Credentials.new(
    Rails.application.credentials.dig(:aws, :access_key_id),     # アクセスキーID
    Rails.application.credentials.dig(:aws, :secret_access_key)  # シークレットアクセスキー
  )

  s3_resource = Aws::S3::Resource.new(region: Rails.application.credentials.dig(:aws, :s3, :region), credentials: Rails.application.credentials.dig(:aws, :s3, :bucket))
  S3_BUCKET = s3_resource.bucket('S3のバケット名')
end
